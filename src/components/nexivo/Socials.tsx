import { Facebook, Instagram, Linkedin } from "lucide-react";

type Set = { linkedin: string; facebook: string; instagram: string };

export const SocialRow = ({ socials, label }: { socials: Set; label?: string }) => (
  <div className="social-row">
    {label && <span className="social-label">{label}</span>}
    <a href={socials.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><Linkedin className="size-4" /></a>
    <a href={socials.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram"><Instagram className="size-4" /></a>
    <a href={socials.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook"><Facebook className="size-4" /></a>
  </div>
);
