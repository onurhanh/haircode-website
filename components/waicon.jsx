'use client';

import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogCancel,
  AlertDialogAction,
} from '@/components/ui/alert-dialog';

export default function Waicon() {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <button>
          <FaWhatsapp size={24} />
        </button>
      </AlertDialogTrigger>

      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>WhatsApp’a yönlendirileceksiniz</AlertDialogTitle>
          <AlertDialogDescription>
            Randevu almak için WhatsApp üzerinden iletişime geçmek istiyor musunuz?
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Vazgeç</AlertDialogCancel>
          <AlertDialogAction
            onClick={() =>
              window.open(
                'https://wa.me/905412524864',
                '_blank'
              )
            }
          >
            Evet, devam et
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
