import { Transform } from "class-transformer";
import { IsInt, IsOptional } from "class-validator";

export class findAllBooksPaginationDto {
  @IsOptional()
  @Transform(({value}) => parseInt(value, 10))
  @IsInt()
  take?: number;

  @IsOptional()
  @Transform(({value}) => parseInt(value, 10))
  @IsInt()
  skip?: number;
}
