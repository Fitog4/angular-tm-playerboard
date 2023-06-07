export interface PlayerBoard {
  playerBoardId: number;

  terraformRating: number;

  megaCreditsAmount: number;
  steelAmount: number;
  titaniumAmount: number;
  plantsAmount: number;
  energyAmount: number;
  heatAmount: number;

  megaCreditsProduction: number;
  steelProduction: number;
  titaniumProduction: number;
  plantsProduction: number;
  energyProduction: number;
  heatProduction: number;

  megaCreditsPerUnitOfSteel: number;
  megaCreditsPerUnitOfTitanium: number;
}
