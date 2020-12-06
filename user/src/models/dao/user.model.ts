import { Model, Optional, DataTypes } from 'sequelize';
import sequelize from '../../connections/db';

interface UserInterface {
    id?: number;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    roleId: number;
    isDeleted: boolean;
    isActivated: boolean
}

interface UserCreationAttributes extends Optional<UserInterface, "id"> {}

class User extends Model<UserInterface, UserCreationAttributes> implements UserInterface {
    public id!: number;
    public firstName!: string;
    public lastName!: string;
    public email!: string;
    public password!: string;
    public roleId!: number;
    public isDeleted!: boolean;
    public isActivated!: boolean;

    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

User.init(
  {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    firstName: {
        type: DataTypes.STRING(20),
        allowNull: false
    },
    lastName: {
        type: DataTypes.STRING(20),
        allowNull: false
    },
    email: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    password: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    roleId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    isDeleted: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    isActivated: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    }
  },
  {
      tableName: "users",
      schema: "dbo",
      sequelize,
  }
);

export default User;