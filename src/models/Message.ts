import { DataTypes } from 'sequelize';
import {
  AllowNull,
  AutoIncrement,
  Column,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';
import { NewFiles } from '../types/NewFiles';

@Table({
  tableName: 'messages',
})

export class Message extends Model {
  @AutoIncrement
  @PrimaryKey
  @AllowNull(false)
  @Column({
    type: DataTypes.INTEGER,
  })
    id: number;

  @AllowNull(false)
  @Column({
    type: DataTypes.STRING,
  })
    userName: string;

  @AllowNull(false)
  @Column({
    type: DataTypes.STRING,
  })
    email: string;

  @AllowNull(false)
  @Column({
    type: DataTypes.STRING,
  })
    homePage: string;

  @AllowNull(false)
  @Column({
    type: DataTypes.STRING(10000),
  })
    editorState: string;

  @AllowNull(false)
  @Column({
    type: DataTypes.ARRAY(DataTypes.JSON),
  })
    photos: NewFiles[];

  @AllowNull(false)
  @Column({
    type: DataTypes.ARRAY(DataTypes.JSON),
  })
    docs: NewFiles[];


  @AllowNull(true)
  @Column({
    type: DataTypes.INTEGER,
  })
    relatedId: number | null;
}
