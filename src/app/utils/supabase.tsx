
import { createClient } from '@supabase/supabase-js'

// const supabaseUrl = 'https://mqsvuplppswdwhybeeqq.supabase.co';
// const supabaseKey = process.env.SUPABASE_KEY;
// const supabase = createClient(supabaseUrl, supabaseKey);

class API{

    // Read a data
    async read(){
        // let { yello: Activity, error } = await supabase.from('Activity').select('id');
        // console.log(yello);
        console.log('Hello world1');
    }

    // create data
    create(){
        console.log('create');
    }

    // delete data
    delete(){
        console.log('delete');
    }

    // update data
    update(){
        console.log('update');
    }


}
export default API;