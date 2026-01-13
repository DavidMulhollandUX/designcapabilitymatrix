
import { LucideIcon } from 'lucide-react';

export type RatingValue = 'na' | 'basic' | 'intermediate' | 'advanced' | undefined;

export interface Skill {
  id: string;
  name: string;
  subskills?: string[];
  levels?: {
    Basic: string;
    Intermediate: string;
    Advanced: string;
    [key: string]: string;
  };
}

export interface SkillGroup {
  group: string;
  skills: Skill[];
}

export interface TabConfig {
  id: string;
  label: string;
  icon: LucideIcon;
  data: SkillGroup[];
  type: 'exp' | 'gen';
}

export interface RatingsMap {
  [skillId: string]: RatingValue;
}

export interface FocusAreasMap {
  [skillId: string]: boolean;
}
