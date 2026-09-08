const { createClient } = require("@supabase/supabase-js");
require("dotenv").config();

const supabase = createClient(
  process.env.TEST_SUPABASE_URL,
  process.env.TEST_SUPABASE_SECRET_KEY,
  {
    db: {
      schema: "percyphone",
    },
  }
);

module.exports = supabase;