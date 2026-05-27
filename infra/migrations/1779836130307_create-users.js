/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = (pgm) => {
  pgm.createTable("users", {
    id: {
      type: "uuid",
      primaryKey: true,
      default: pgm.func("gen_random_uuid()"),
    },
    username: {
      type: "varchar(40)",
      notNull: true,
      unique: true,
    },
    email: {
      type: "varchar(254)",
      notNull: true,
      unique: true,
    },
    password: {
      type: "varchar(72)",
      notNull: true,
    },
    creat_at: {
      type: "timestamptz",
      default: pgm.func("now()"),
      notNull: true,
    },
    update_at: {
      type: "timestamptz",
      default: pgm.func("now()"),
      notNull: true,
    },
  });
};

exports.down = false;
