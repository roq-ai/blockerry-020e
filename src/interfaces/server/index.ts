import { InstallationInterface } from 'interfaces/installation';
import { GetQueryInterface } from 'interfaces';

export interface ServerInterface {
  id?: string;
  ip_adress: string;
  region: string;
  server_provider: string;
  created_at?: any;
  updated_at?: any;
  installation?: InstallationInterface[];

  _count?: {
    installation?: number;
  };
}

export interface ServerGetQueryInterface extends GetQueryInterface {
  id?: string;
  ip_adress?: string;
  region?: string;
  server_provider?: string;
}
