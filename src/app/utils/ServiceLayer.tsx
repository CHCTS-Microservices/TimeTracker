
import { createClient } from '@supabase/supabase-js'
import * as strct from './types';
import supabase from '../../../supabase';


class API{
 
    // gets user id and querys events for that user
    
    async startUp(id : number)
    {
     /**
     *  Returns evetns for user {id}
     *  @return {events} env
     */
        try
        {
            let { data, error } = await supabase.from('Events').select(`id, userID, totalTime, timeLine, active, notes, trialID`).eq('userID', id);
            let events : strct.Event[] = [];
            if (data?.length != 0)
            {
                for (const ev of data)
                {

                    let trial : any = await this.getTrialDet(ev.trialID);
                    let event : strct.Event = {
                        ...ev,
                        ...trial[0],
                    };
                    events.push(event);
                }
            }
            return events;
            
        }
        catch (error)
        {
            console.log('error');

        }

    }

    async getTrialDet(id : number)
    {
    /**
     *  Returns trial for id {id}
     *  @return {data} Trial
     */
        try
        {
            let { data, error } = await supabase.from('Trials').select(`title, unit, stage`).eq('id', id);
            return data;
        }
        catch (error)
        {
            console.log('wtf');
        }
    }


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