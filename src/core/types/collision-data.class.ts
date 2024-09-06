export class CollisionData {
  constructor(
    readonly collision_id: string,
    readonly crash_date: string,
    readonly create_date: string,
    readonly contributing_factor_vehicle_1?: string,
    readonly contributing_factor_vehicle_2?: string,
    readonly number_of_cyclist_injured?: string,
    readonly number_of_cyclist_killed?: string,
    readonly number_of_motorist_injured?: string,
    readonly number_of_motorist_killed?: string,
    readonly number_of_pedestrians_injured?: string,
    readonly number_of_persons_injured?: string,
    readonly off_street_name?: string,
    readonly on_street_name?: string,
    readonly vehicle_type_code_1?: string,
    readonly vehicle_type_code_2?: string,
  ) {
    this.collision_id = collision_id;
    this.crash_date = crash_date;
    this.contributing_factor_vehicle_1 = contributing_factor_vehicle_1 ?? "";
    this.contributing_factor_vehicle_2 = contributing_factor_vehicle_2 ?? "";
    this.number_of_cyclist_injured = number_of_cyclist_injured ?? "";
    this.number_of_cyclist_killed = number_of_cyclist_killed ?? "";
    this.number_of_motorist_injured = number_of_motorist_injured ?? "";
    this.number_of_motorist_killed = number_of_motorist_killed ?? "";
  }
}