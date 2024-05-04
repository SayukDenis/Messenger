interface IStrategy{
  Authorize(navigation:any, data:any): void;
}
export class ButtonAction {
  private strategy: IStrategy;
  constructor(strategy: IStrategy) {
    this.strategy = strategy;
  }
  public setStrategy(strategy: IStrategy)
  {
    this.strategy = strategy;
  }
  public Authorize(navigation:any, data:any)
  {
    this.strategy.Authorize(navigation, data)
  }
}

export class AuthorizeWithNumberStrategy
{
  public Authorize(navigation:any, data:any)
  {
    navigation.navigate("Code Verification Page",{phoneNumber:`+${data.selectedCountry.phone}${data.phoneNumber}`});
  }
}

export class AuthorizateWithGoogleStrategy
{
  public Authorize(navigation:any, data:any)
  {

  }
}