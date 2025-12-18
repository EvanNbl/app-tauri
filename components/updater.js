'use client'
import { useEffect } from 'react';
import { check } from '@tauri-apps/plugin-updater';
import { relaunch } from '@tauri-apps/plugin-process';
import { ask } from '@tauri-apps/plugin-dialog';

export default function Updater() {
  useEffect(() => {
    async function runUpdate() {
      try {
        const update = await check();
        
        if (update) {
          console.log("Mise à jour trouvée :", update.version);
          console.log(update);

          const confirmation = await ask(
            `
            Une nouvelle version (${update.version}) est disponible.
            
            Nouveautés :

            ${update.body}

            Voulez-vous l'installer maintenant ?
            
            `,
            { 
              title: 'Mise à jour disponible',
              okLabel: 'Installer',
              cancelLabel: 'Plus tard'
            }
          );

          if (confirmation) {
            console.log("Téléchargement lancé...");
            await update.downloadAndInstall();
            await relaunch();
          }
        }
      } catch (error) {
        console.error("Erreur détaillée de l'updater:", error);
      }
    }
    runUpdate();
  }, []);

  return null;
}