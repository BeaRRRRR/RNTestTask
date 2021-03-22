/* In the real world we would probably have different data for login and sign up,
   so I would export two separate interfaces, but for now, one is enough
 */
export interface AuthEmailPayload {
  email: string;
  password: string;
}
