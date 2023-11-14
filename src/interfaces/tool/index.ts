import { InstallationInterface } from 'interfaces/installation';
import { GetQueryInterface } from 'interfaces';

export interface ToolInterface {
  id?: string;
  tool_type: string;
  tool_name: string;
  price: number;
  created_at?: any;
  updated_at?: any;
  installation?: InstallationInterface[];

  _count?: {
    installation?: number;
  };
}

export interface ToolGetQueryInterface extends GetQueryInterface {
  id?: string;
  tool_type?: string;
  tool_name?: string;
}
