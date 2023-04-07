import { TreeNode } from 'primeng/api';
import { LocalStorageData as LocalStorageData } from './baseModel';

export class StoreDashboardData {
    ItemCategories: Array<LocalStorageData>;
    ItemTypes: Array<LocalStorageData>;
}
export class AnalyticsDetailCards {
lowStores:  Array<TreeNode>;
criticalLowStores:   Array<TreeNode>;
outOfStock:  Array<TreeNode>;
expiredStock:  Array<TreeNode>;
}
export class criticallowItems
{
    label:string=undefined;
    key:string=undefined;
    children:criticallowItemsChildren[]
}
export class criticallowItemsChildren
{
    key:string; label:string;data:string;type:string;
      
}