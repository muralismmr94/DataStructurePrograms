/**
 * *****************************************************************************************
 * purpose    : It is used to write a methods of calender class.
 * @function  : This module is used to exports some methods which are used in calender class.
 * @returns   : It returns the date of the month and year checking.
 * @author    : Murali s <muralismmr94@gmail.com>
 * @since     : 5-mar-2019.
 * @version   : 1.0
 * *****************************************************************************************
 */


 /**
  * purpose : It is used to exporting the utility classes.
  */

module.exports={

    /**
     * 
     * @param {it is taken from the user command line argument} m 
     * @param {the method return the date of the month} d 
     * @param {it is taken from the user command line argument} y 
     * @function: It returns the day using three parameters arguments.
     */
   day(m,d,y)
   {
    var v = Math.floor((14 - m) / 12)
    var y0 = y - v
    var x = y0 + Math.floor(y0 / 4) - Math.floor(y0 / 100) + Math.floor(y0 / 400)
    var m0 = m + 12 * Math.floor((14 - m) / 12) - 2
    var d0 = (d + x + Math.floor((31 * m0) / 12)) % 7
    d0 = Math.floor(d0)
    return d0;
   },
/**
 * @param    {It is taken the year as an argument} year.
 * @function:It check the year as as leap  year or not
 */
   leapYear(year)
   {
    if  ((year % 4 == 0) && (year % 100 != 0)) 
            return true;
    if  (year % 400 == 0) 
        return true;
        return false;
   },
   /**
    * 
    * @param     {This returns the month of the current case} month 
    * @function: It is used to return the current month arguments.
    */

    monthof(month) {

        switch (month) {
            case 1: return 31;
                break;
            case 2: return 28;
                break;
            case 3: return 31;
                break;
            case 4: return 30;
                break;
            case 5: return 31;
                break;
            case 6: return 30;
                break;
            case 7: return 31;
                break;
            case 8: return 31;
                break;
            case 9: return 30;
                break;
            case 10: return 31;
                break;
            case 11: return 30;
                break;
            case 12: return 31;
                break;
        }
    }
} 

