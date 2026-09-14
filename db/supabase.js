//THIS IS THE CONNECTION CLIENT TO SUPABASE. .ENV IS ALSO
//REQUIRED HERE IN ORDER TO FUNCTION.
const { createClient } = require("@supabase/supabase-js");
require("dotenv").config();

//create supabase connection
const supabase = createClient(
  process.env.TEST_SUPABASE_URL,
  process.env.TEST_SUPABASE_SECRET_KEY,
  {
    db: {
      schema: "percyphone",
    },
  }
);

//export supabase
module.exports = supabase;