export class IssueProvisionForm
{
    tenantId!: number;
    issueRequestId!: number | undefined;
    requestedItemId!: number;
    wareHouseId!: number;
    issuingDepot!: string | undefined;
    qtyIssued!: string | undefined;
    qtyFollowed!: string | undefined;
}
