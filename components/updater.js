'use client'
import { useEffect } from 'react';
import { check } from '@tauri-apps/plugin-updater';
import { relaunch } from '@tauri-apps/plugin-process';

export default function Updater() {
  useEffect(() => {
    async function runUpdate() {
      try {
        const update = await check();
        if (update) {
          console.log("Mise à jour trouvée :", update.version);
          await update.downloadAndInstall();
          await relaunch();
        }
      } catch (error) {
        console.error("Erreur détaillée de l'updater:", error);
      }
    }
    runUpdate();
  }, []);

  return null;
}