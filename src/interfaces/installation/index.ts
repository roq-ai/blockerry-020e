import { OrganizationInterface } from 'interfaces/organization';
import { ServerInterface } from 'interfaces/server';
import { ToolInterface } from 'interfaces/tool';
import { GetQueryInterface } from 'interfaces';

export interface InstallationInterface {
  id?: string;
  organization_id: string;
  server_id: string;
  coin_name: string;
  coin_ticker: string;
  logo: string;
  genesis_file: string;
  status: string;
  tool_id: string;
  created_at?: any;
  updated_at?: any;

  organization?: OrganizationInterface;
  server?: ServerInterface;
  tool?: ToolInterface;
  _count?: {};
}

export interface InstallationGetQueryInterface extends GetQueryInterface {
  id?: string;
  organization_id?: string;
  server_id?: string;
  coin_name?: string;
  coin_ticker?: string;
  logo?: string;
  genesis_file?: string;
  status?: string;
  tool_id?: string;
}
