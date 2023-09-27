
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

            const log : strct.Log = {
                eventID : data[0].id,
                staffID : event.userID,
                action : "Created Event",
                date : new Date(),

            };
            await this.logAction(log);

            return data;
        }
        catch (error)
        {
            console.log('Error: cant create event');
        }
    }

    // update Event, funtion will return
    async updateEvent(event : strct.Event)
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

            const log : strct.Log = {
                eventID : event.id,
                staffID : event.userID,
                action : "Updated Event",
                date : new Date(),
            };

            await this.logAction(log);

            return data;
        }
        catch (error)
        {
            console.log('Error: cant update event');
        }
    }

    // delete Event, funtion will return error
    async deleteEvent(event : strct.Event)
    {
    /**
     *  delete event for event id {id}
     *  @return {error} 
     */
        try
        {
            const { data, error } = await supabase.from('Events').delete().eq('id', event.id);

            const log : strct.Log = {
                eventID : event.id,
                staffID : event.userID,
                action : "Deleted Event",
                date : new Date(),

            };
            await this.logAction(log);

            return error;
        }
        catch (error)
        {
            console.log('Error: cant delete event');
        }
    }

    // Funtionality for logs
    // create Log, funtion will return
    async logAction(log : strct.Log)
    {
    /**
     *  Returns event for event id {id}
     *  @return {} event
     */
        try
        {
            console.log(log);
            const { data, error } = await supabase.from('Logs').insert(
            [
                {
                 action: log.action,
                 staffID: log.staffID,
                 eventID: log.eventID,
                 date: log.date,
                }
                 
            ]).select();
            console.log(error);

            return data;
        }
        catch (error)
        {
            console.log('Error: cant log');
        }
    }

}
export default API;