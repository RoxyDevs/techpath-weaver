
'use client';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { useGuides } from '@/contexts/GuidesContext';

type SettingsDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export function SettingsDialog({ open, onOpenChange }: SettingsDialogProps) {
  const { showGuides, toggleGuides } = useGuides();

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Ajustes de la Plataforma</DialogTitle>
          <DialogDescription>
            Personaliza tu experiencia en TechPath Weaver.
          </DialogDescription>
        </DialogHeader>
        <div className="py-4">
          <div className="flex items-center justify-between rounded-lg border p-4">
            <Label htmlFor="guides-switch" className="flex flex-col space-y-1">
                <span>Guías interactivas</span>
                <span className="font-normal leading-snug text-muted-foreground">
                    Muestra sugerencias y ayudas en la plataforma.
                </span>
            </Label>
            <Switch
              id="guides-switch"
              checked={showGuides}
              onCheckedChange={toggleGuides}
            />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
