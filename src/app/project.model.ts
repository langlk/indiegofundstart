export class Project {
  fundingCurrent: number = 0;
  featured: boolean = false;

  constructor(
    public name: string,
    public creator: string,
    public description: string,
    public fundingGoal: number,
    public fundingUse: string,
    public backerAwards: string,
    public category: string
  ) {}
}
