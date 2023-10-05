
import { createClient } from '@supabase/supabase-js'
import {Event, Trial, Activity} from '@/app/utils/types';
import supabase from '@/../supabase';


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
            let events : Event[] = [];
            if (data?.length != 0)
            {
                for (const ev of data)
                {

                    let trial : any = await this.getTrialDet(ev.trialID);
                    let activity : any = await this.getActivityDet(ev.activityID);
                    let event : Event = {
                        ...ev,
                        trialName : trial.title,
                        activityName : activity.title,
                        stage : trial.stage,
                        unit : trial.unit,
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

     // given trial id, funtion will return trial
     async getTrialsDet(id : number[])
     {
     /**
      *  Returns trial for id {[id]}
      *  @return {data} Trial
      */
         try
         {
             // let { data, error } = await supabase.from('Trials').select(`title, unit, stage, activities`).eq('id', id);
             // let { data, error } = await supabase.from('Trials').select(`title, unit, stage, activities`).eq('id', id);
             // return data[0];
             let trials : Trial[] = [];
             if (id.length != 0)
             {
                 for (const x of id)
                 {
 
                     let getTrial : any = await this.getTrialDet(x);
                     // let activity : any = await this.getTrialDet(ev.activityID);
                     let trial : Trial = {
                         ...getTrial,
                         // trialName : trial.title,
                         // activityName : activity.title,
                         // ...trial[0],
                     };
                     trials.push(trial);
                 }
             }
             return trials;
         }
         catch (error)
         {
             console.log('Error: cant get trial details for the trials IDs list given');
         }
     }

    // given User id, funtion will return trials that user is in
    async getTrials(id : number)
    {
    /**
     *  Returns trial for user {id}
     *  @return {data} Trials
     */
        try
        {
            // let { data, error } = await supabase.from('Trials').select(`title, unit, stage`).eq('id', id);
            
            let { data, error } = await supabase.from('Trials').select('id').contains('staff', [id]);
            // console.log(data);

            // format data so its easier for front end to use
            let trials : number[] = [];
            data?.forEach((x) =>trials.push(x.id));
            return trials;
        }
        catch (error)
        {
            console.log('Error: cant get trials that user is part of');
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

    // given activities ids, funtion will return trial
    async getActivitiesDet(ids : number[])
    {
    /**
     *  Returns Activitiex for id {[id]}
     *  @return {data} Activities
     */
        try
        {
            console.log(ids);
            // let { data, error } = await supabase.from('Trials').select(`title, unit, stage, activities`).eq('id', id);
            // let { data, error } = await supabase.from('Trials').select(`title, unit, stage, activities`).eq('id', id);
            // return data[0];
            let activities : Activity[] = [];
            if (ids.length != 0)
            {
                for (const x of ids)
                {

                    let getAct : any = await this.getActivityDet(x);
                    // let activity : any = await this.getTrialDet(ev.activityID);
                    let activity : Activity = {
                        ...getAct,
                        // trialName : trial.title,
                        // activityName : activity.title,
                        // ...trial[0],
                    };
                    activities.push(activity);
                }
            }
            return activities;
        }
        catch (error)
        {
            console.log('Error: cant get activity details for the activity ids given');
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
            let event : Event = {
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
    async createEvent(event : Event)
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

    // update Event, funtion will return
    async updateEvent(event : Event)
    {
    /**
     *  updates event for event id {id}
     *  @return {event} event
     */
        try
        {
            const { data, error } = await supabase.from('Events').update(
                {
                 userID: event.userID,
                 trialID: event.trialID,
                 activityID: event.activityID,
                 timeLine: event.timeLine,
                 active: event.active,
                 notes: event.notes,
                 date: event.date}
            ).eq('id', event.id).select();

            return data;
        }
        catch (error)
        {
            console.log('Error: cant create event');
        }
    }

    // delete Event, funtion will return error
    async deleteEvent(id : number)
    {
    /**
     *  delete event for event id {id}
     *  @return {error} 
     */
        try
        {
            const { data, error } = await supabase.from('Events').delete().eq('id', id);

            return error;
        }
        catch (error)
        {
            console.log('Error: cant create event');
        }
    }

}
export default API;