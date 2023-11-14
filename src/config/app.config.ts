interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Business Owner'],
  customerRoles: ['Customer'],
  tenantRoles: ['Business Owner', 'IT Manager', 'System Administrator', 'Developer'],
  tenantName: 'Organization',
  applicationName: 'Blockerry',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [
    'View tool information',
    'View server information',
    'View installation status',
    'View personal user information',
  ],
  ownerAbilities: ['Manage tools', 'Manage installations', 'Manage servers', 'Manage organizations'],
  getQuoteUrl: 'https://app.roq.ai/proposal/5aed31ef-f9fa-4d5b-b078-ecec362b5048',
};
