
import { createClient } from '@supabase/supabase-js'
import * as strct from './types';
import supabase from '../../../supabase';


class API{
 
    // gets user id and querys events for that user
    //!!!!!!!TODO will need to only get data for the current date 
    async startUp(id : number)
    {
     /**
     *  Returns evetns for user {id}
     *  @return {events} env
     */
        try
        {
            let { data, error } = await supabase.from('Events').select(`id, userID, totalTime, timeLine, active, notes, trialID, activityID`).eq('userID', id);
            let events : strct.Event[] = [];
            if (data?.length != 0)
            {
                for (const ev of data)
                {

                    let trial : any = await this.getTrialDet(ev.trialID);
                    let activity : any = await this.getTrialDet(ev.activityID);
                    let event : strct.Event = {
                        ...ev,
                        trialName : trial.title,
                        activityName : activity.title,
                        ...trial[0],
                    };
                    events.push(event);
                }
            }
            return events;
            
        }
        catch (error)
        {
            console.log('Error: cant get events');
        }
    }

    // given trial id, funtion will return trial
    async getTrialDet(id : number)
    {
    /**
     *  Returns trial for id {id}
     *  @return {data} Trial
     */
        try
        {
            let { data, error } = await supabase.from('Trials').select(`title, unit, stage`).eq('id', id);
            return data[0];
        }
        catch (error)
        {
            console.log('Error: cant get trial details');
        }
    }

    // given Activity ID, funtion will return Activity
    async getActivityDet(id : number)
    {
    /**
     *  Returns activity for id {id}
     *  @return {data} activity
     */
        try
        {
            let { data, error } = await supabase.from('Activity').select(`title`).eq('id', id);
            return data[0];
        }
        catch (error)
        {
            console.log('Error: cant get activity details');
        }
    }

    // given Event ID, funtion will return Activity
    async getEvent(id : number)
    {
    /**
     *  Returns event for event id {id}
     *  @return {event} event
     */
        try
        {
            let { data, error } = await supabase.from('Events').select(`id, userID, totalTime, timeLine, active, notes, trialID, activityID, date`).eq('id', id);
            let trial : any = await this.getTrialDet(data[0].trialID);
            let activity : any = await this.getTrialDet(data[0].activityID);
            let event : strct.Event = {
                ...data[0],
                trialName : trial.title,
                activityName : activity.title,
                ...trial[0],
            };
            return event.date;
        }
        catch (error)
        {
            console.log('Error: cant get event details');
        }
    }

    // create Event, funtion will return
    async createEvent(event : strct.Event)
    {
    /**
     *  Returns event for event id {id}
     *  @return {event} event
     */
        try
        {
            const { data, error } = await supabase.from('Events').insert(
            [
                {
                 userID: event.userID,
                 trialID: event.trialID,
                 activityID: event.activityID,
                 timeLine: event.timeLine,
                 active: event.active,
                 notes: event.notes,
                 date: event.date}
            ]).select();

            return data;

        }
        catch (error)
        {
            console.log('Error: cant create event');
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