import { Prisma } from "@prisma/client";

export class User  implements Prisma.UserUncheckedUpdateInput{
  id!: number;
  name!: string;
  email!: string;
}
