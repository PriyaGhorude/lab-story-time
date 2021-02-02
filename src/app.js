//Progression 1:
//We've got some basic info about Karen's home
//Debug the type of data provided
//Return the types concatenated in a single variable
function moreAboutHome(address, distance, neibours)
{
    var result = typeof(address) + typeof(distance) + typeof(neibours);
    return result;
}

//Progression 2:  //Check here not completed
//Check if the data given is of the right type
//parents = String, noOfSiblings = Number, isNuclearFamily = Boolean
function moreAboutKaren(parents, noOfSiblings, isNuclearFamily)
{
    var result  = "";
    if(arguments.length != 3)
    {
        return false;
    }
    else
    {
        //var parents = arguments[0]
        if(typeof(arguments[0]) == "string" && typeof(arguments[1]) == "number" && typeof(arguments[2]) == "boolean") 
        {
          return true;
        }
        else{
            return false;
        }
    }
   
   
     //result = typeof(parents) + typeof(noOfSiblings) + typeof(isNuclearFamily);
    // if(result == "StringNumberBoolean")
    // {
    //     return true;
    // }
   // return result;
}

//Progression 3:
//Lily is suspicious about Karen's new friend
//Karen tells her friend's age and even writes it down
//Check which one those is not a number (NaN) and return that value
function doesFriendExist(ageInText, ageInNumber)
{
    if(ageInText == 'NaN' || ageInNumber == 'NaN')
    {
        return "NaN";
    }
    else if(isNaN(ageInText) || isNaN(ageInNumber))
    {
        return NaN;
    }
    // var x;
    // if(typeof(ageInText) == "boolean" || typeof(ageInNumber) == "number")
    // {
    //     x = ageInText;
    // }
    // else if(typeof(ageInText) == "boolean" || typeof(ageInNumber) == "boolean")
    // {
    //     x = NaN;
    // }
    // else if(typeof(ageInText) == "string" || typeof(ageInNumber) == "boolean")
    // {
    //     x = ageInText;
    // }
    // else if(ageInText == " " || typeof(ageInNumber) == "boolean")
    // {
    //     x = ageInNumber;
    // }
    // return x;
}


//Progression 4:
//Lily gave Karen x sweets
//Karen ate y sweets herself
//On her way to the river, she ate another z sweets every n meters travelled
//Her friend divided the remaining sweets into 2 parts for each
//How many sweets did her friend get to eat?
function sweetTooth(totalNoOfSweets,sweetsConsumedByKaren,sweetsConsumedInNMeters,metersToTravel)
{
    if(arguments.length == 0)  //when no parameters
    {
        return "No sweets for Karen's friend";
    }
    else
    {
        var nCount = 0;
        for(let i = 0; i< arguments.length ;i++)
        {
            if(isNaN(arguments[i]))  //if any one not a number
            {
                return "No sweets for Karen's friend";
            }
            if(arguments[i] == 0)
            {
                nCount ++;  // if all parameter are 0 count increase to length of parameter
            }
        }
        if(nCount == (arguments.length))
        {
            return 0;
        }
        if(sweetsConsumedByKaren * sweetsConsumedInNMeters > metersToTravel)
        {
            return 0;
        }
    }
}

//Progression 5:
//As Lily moves closer, it gets colder. She checks the temperature on her mobile
//It only shows in fahrenheit. Convert the data to celsius and return it.
function convertToCelsius(temperature)
{
    if(isNaN(temperature) || typeof(temperature) == 'string' || typeof(temperature) == 'object')
    {
        return "Technical Error!";
    }
    else{
    var farTemp = temperature;
    var celTemp = 0;

    celTemp = (farTemp - 32) * 5/9;
    return celTemp;
    }
    // convertToCelsius(undefined);
}

//Progression 6:
//Lily can now do multiple things to deal with this
//1. Take her daughter to a doctor
//2. Talk to her husband about it
//3. Counsel her daughter herself
//4. Lock her daughter in her room
//Given a value, return which of these above actions Lily would take
function aDifficultChoice(x)
{
    var solution = "";
        switch (x)
        {
            case -1:
                solution = "Break down and give up all hope";
                break;
            case 1:
                solution = "Take her daughter to a doctor";
                break;
              case undefined:
                solution = "Wasn't able to decide";
                break;
              case "I give up":
                solution = "Refused to do anything for Karen";
                break;
        }
    return solution;
}


//Progression 7:
//Lily realized that she'd hurt her daughter
//All she wants now is for her to stop crying
//She refuses to talk to her but Lily doesn't stop trying
//She tries out multiple things hoping for the best
//Take all of Lily's strategies and concatenate them to a single var
//Seperate the strategies by a single space
//Return the length of the complete strategy
