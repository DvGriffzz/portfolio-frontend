import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillsService } from '../../services/skills.service';
import { Skill } from '../../models/skill.model';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent implements OnInit {
  skills: Skill[] = [];
  loading = true;
  error: string | null = null;

  constructor(private skillsService: SkillsService) {}

  ngOnInit(): void {
    this.loadSkills();
  }

  loadSkills(): void {
    this.skillsService.getSkills().subscribe({
      next: (data) => {
        this.skills = data;
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Failed to load skills';
        this.loading = false;
        console.error('Error loading skills:', err);
      }
    });
  }

  // Group skills by level
  getSkillsByLevel(level: string): Skill[] {
    return this.skills.filter(skill => skill.level === level);
  }

  // Get unique levels
  getLevels(): string[] {
    return [...new Set(this.skills.map(skill => skill.level))];
  }

  // Get icon based on skill name (you can customize this)
  getSkillIcon(skillName: string): string {
    const iconMap: { [key: string]: string } = {
      'Angular': '🅰️',
      'React': '⚛️',
      'Vue': '💚',
      'JavaScript': '🟨',
      'TypeScript': '🔷',
      'HTML': '🌐',
      'CSS': '🎨',
      'Node.js': '🟢',
      'Spring Boot': '🍃',
      'Java': '☕',
      'Python': '🐍',
      'Git': '📦',
      'Docker': '🐳',
      'AWS': '☁️',
      'default': '🚀'
    };
    return iconMap[skillName] || iconMap['default'];
  }
}