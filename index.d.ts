export interface ParsedPackageName {
  scope: string | null;
  fullName: string;
  projectName: string | null;
  moduleName: string | null;
}

declare function parsePackageJsonName(
  name: string | { name?: string }
): ParsedPackageName;

export = parsePackageJsonName;
