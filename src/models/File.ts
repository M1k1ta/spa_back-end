import { DataTypes } from 'sequelize';
import {
  AllowNull,
  AutoIncrement,
  Column,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';

@Table({
  tableName: 'files',
})

export class File extends Model {
  @PrimaryKey
  @AutoIncrement
  @AllowNull(false)
  @Column({
    type: DataTypes.INTEGER,
  })
    id: number;

  @AllowNull(false)
  @Column({
    type: DataTypes.STRING,
  })
    name: string;

  @AllowNull(false)
  @Column({
    type: DataTypes.BLOB,
  })
    data: Buffer;

  @AllowNull(false)
  @Column({
    type: DataTypes.INTEGER,
  })
    size: number;

  @AllowNull(false)
  @Column({
    type: DataTypes.STRING,
  })
    encoding: string;

  @AllowNull(false)
  @Column({
    type: DataTypes.STRING,
  })
    mimetype: string;
}
