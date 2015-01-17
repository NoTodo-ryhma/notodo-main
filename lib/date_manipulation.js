
// Proper way of calculating dates ahead.


Date.prototype.addDays = function(days)
{
    var dat = new Date(this.valueOf());
    dat.setDate(dat.getDate() + days);
    return dat;
}

Date.prototype.substDays = function(days)
{
    var dat = new Date(this.valueOf());
    dat.setDate(dat.getDate() - days);
    return dat;
}

