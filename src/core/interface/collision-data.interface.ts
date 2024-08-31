export type CollisionData = {
  readonly collision_id: string;
  readonly contributing_factor_vehicle_1: string;
  readonly contributing_factor_vehicle_2: string;
  readonly crash_date: string;
  readonly create_date: string;
  readonly number_of_cyclist_injured?: string;
  readonly number_of_cyclist_killed?: string;
  readonly number_of_motorist_injured?: string;
  readonly number_of_motorist_killed?: string;
  readonly number_of_pedestrians_injured?: string;
  readonly number_of_persons_injured?: string;
  readonly off_street_name?: string;
  readonly on_street_name?: string;
  readonly vehicle_type_code1: string;
  readonly vehicle_type_code_2: string;
}