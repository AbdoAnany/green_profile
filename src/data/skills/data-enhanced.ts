// Skills categories and tech icons data
import { 
  Code, Database, Settings, TestTube, Smartphone, Cloud, GitBranch, Palette, 
  Zap, Shield, Globe, Cpu, Server, Monitor, Layers, Terminal, Wifi, Router, 
  Binary, FileCode, Folder, Laptop, LineChart, Cog, Rocket, Braces, Hash, Store,
  Package, KeySquare, CircuitBoard, Code2, Share2, Infinity, Blocks,
  AlertCircle, AppWindow, Archive, Bot, BookOpen, Box, Boxes, Mail, MessageCircle,
  Codesandbox, Command, Component, Construction, Download, Eye, FileBadge,
  FileJson, FileType, FlaskConical, FolderGit, GitCompare, GanttChart, Gauge,
  HardDrive, HeartHandshake, IceCream, Inspect, Joystick, Languages, Lightbulb,
  ListTodo, Microscope, Network, Orbit, PanelLeft, Puzzle, Radio, RectangleHorizontal,
  Scan, Scale, ScrollText, Search, ServerCog, ShieldCheck, Signal, Sigma, SlidersHorizontal,
  Sparkles, Diff, Split, SprayCan, Tags, Workflow
} from 'lucide-react';
import { LucideIcon } from 'lucide-react';

export type SkillCategory = {
  title: string;
  icon: LucideIcon;
  skills: string[];
  color: string;
  iconColor: string;
};

export type TechIcon = {
  icon: LucideIcon;
  delay: string;
};

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend Development",
    icon: Smartphone,
    skills: ["Flutter", "Dart", "Material-UI", "React", "TypeScript"],
    color: "from-teal-600 to-dark-700",
    iconColor: "text-teal-400"
  },
  {
    title: "Backend & DB",
    icon: Database,
    skills: ["Python", "Node.js", "Firebase", "MongoDB", "REST APIs"],
    color: "from-dark-600 to-teal-600",
    iconColor: "text-yellow-400"
  },
  {
    title: "DevOps & Tools",
    icon: Settings,
    skills: ["GitHub Actions", "Docker", "AWS", "CI/CD", "Git"],
    color: "from-teal-600 to-yellow-500",
    iconColor: "text-teal-400"
  },
  {
    title: "Architecture & Testing",
    icon: TestTube,
    skills: ["Clean Architecture", "BLoC Pattern", "Unit Testing", "TDD"],
    color: "from-yellow-500 to-teal-600",
    iconColor: "text-yellow-400"
  }
];

export const techIcons: TechIcon[] = [
  { icon: Code, delay: "0s" },
  { icon: Globe, delay: "0.5s" },
  { icon: Zap, delay: "1s" },
  { icon: Shield, delay: "1.5s" },
  { icon: Cpu, delay: "2s" },
  { icon: Cloud, delay: "2.5s" },
  { icon: Server, delay: "3s" },
  { icon: Monitor, delay: "3.5s" },
  { icon: Layers, delay: "4s" },
  { icon: Terminal, delay: "4.5s" },
  { icon: Wifi, delay: "5s" },
  { icon: GitBranch, delay: "5.5s" },
  { icon: FileCode, delay: "6s" },
  { icon: Laptop, delay: "6.5s" },
  { icon: Database, delay: "7s" },
  { icon: Braces, delay: "7.5s" },
  { icon: CircuitBoard, delay: "8s" },
  { icon: Blocks, delay: "8.5s" },
];

// Icons for different section backgrounds
export const frontendIcons: TechIcon[] = [
  { icon: Code, delay: "0.2s" },
  { icon: Smartphone, delay: "0.7s" },
  { icon: Palette, delay: "1.2s" },
  { icon: Monitor, delay: "1.7s" },
  { icon: Layers, delay: "2.2s" },
  { icon: Braces, delay: "2.7s" },
  { icon: AppWindow, delay: "3.2s" },
  { icon: Eye, delay: "3.7s" },
  { icon: Component, delay: "4.2s" },
  { icon: Inspect, delay: "4.7s" },
];

export const backendIcons: TechIcon[] = [
  { icon: Server, delay: "0.3s" },
  { icon: Database, delay: "0.8s" },
  { icon: Cloud, delay: "1.3s" },
  { icon: Shield, delay: "1.8s" },
  { icon: Terminal, delay: "2.3s" },
  { icon: CircuitBoard, delay: "2.8s" },
  { icon: ShieldCheck, delay: "3.3s" },
  { icon: ServerCog, delay: "3.8s" },
  { icon: Network, delay: "4.3s" },
  { icon: FileJson, delay: "4.8s" },
];

export const devopsIcons: TechIcon[] = [
  { icon: GitBranch, delay: "0.4s" },
  { icon: Rocket, delay: "0.9s" },
  { icon: Cog, delay: "1.4s" },
  { icon: Settings, delay: "1.9s" },
  { icon: Package, delay: "2.4s" },
  { icon: Share2, delay: "2.9s" },
  { icon: Workflow, delay: "3.4s" },
  { icon: Boxes, delay: "3.9s" },
  { icon: FolderGit, delay: "4.4s" },
  { icon: Diff, delay: "4.9s" },
];

// Additional specialized icon groups for specific sections
export const heroIcons: TechIcon[] = [
  { icon: Blocks, delay: "0.2s" },
  { icon: Lightbulb, delay: "0.7s" },
  { icon: Sparkles, delay: "1.2s" },
  { icon: Code2, delay: "1.7s" },
  { icon: Codesandbox, delay: "2.2s" },
  { icon: Bot, delay: "2.7s" },
  { icon: Puzzle, delay: "3.2s" },
  { icon: HeartHandshake, delay: "3.7s" },
];

export const projectIcons: TechIcon[] = [
  { icon: FileCode, delay: "0.3s" },
  { icon: Folder, delay: "0.8s" },
  { icon: GitCompare, delay: "1.3s" },
  { icon: ListTodo, delay: "1.8s" },
  { icon: GanttChart, delay: "2.3s" },
  { icon: Sigma, delay: "2.8s" },
  { icon: Archive, delay: "3.3s" },
  { icon: Microscope, delay: "3.8s" },
];

export const contactIcons: TechIcon[] = [
  { icon: Mail, delay: "0.2s" },
  { icon: MessageCircle, delay: "0.7s" },
  { icon: Globe, delay: "1.2s" },
  { icon: Share2, delay: "1.7s" },
  { icon: Languages, delay: "2.2s" },
  { icon: Signal, delay: "2.7s" },
];

export const aboutIcons: TechIcon[] = [
  { icon: Cpu, delay: "0.3s" },
  { icon: Gauge, delay: "0.8s" },
  { icon: BookOpen, delay: "1.3s" },
  { icon: FlaskConical, delay: "1.8s" },
  { icon: Joystick, delay: "2.3s" },
  { icon: Orbit, delay: "2.8s" },
];
