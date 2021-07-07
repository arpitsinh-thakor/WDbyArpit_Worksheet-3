
  function data()
  {
    return 'Diameter = ' + this.diameter + ' KM\n' +
           'Diatance form sun = ' + this.distancefromsun + ' KM\n' +
           'Length of Year = ' + this.lengthofyear + ' \n' 
           
  }
  // Planet constructor to be used with "new" keyword,
  // so "this" refers to new object
  function Planet(name, diameter, distancefromsun, lengthofyear)
  {
    this.name = name
    this.diameter = diameter // AU
    this.distancefromsun = distancefromsun // years
    this.lengthofyear = lengthofyear // days
    
    this.data = data
  }

  solarSystem = new Object
  solarSystem.Sun = new Planet("Sun", 0, 0,0)
  solarSystem.Mercury =
    new Planet("Mercury",4879 ,57909227 ,	88+"Earth Days")
  solarSystem.Venus =
    new Planet("Venus", 12104,	108209475 ,25+"Earth Days" )
  solarSystem.Earth =
    new Planet("Earth",12742 ,149598262 ,365.24+"Days")
  solarSystem.Mars =
    new Planet("Mars",6779,227943824,1.9 +"Earth Years")
  solarSystem.Jupiter =
    new Planet("Jupiter", 139822,	778340821 ,	11.9+"Earth Years" )
  solarSystem.Saturn =
    new Planet("Saturn", 116464, 1426666422 ,	29.5 +"Earth Years")
  solarSystem.Uranus =
    new Planet("Uranus", 50724 ,	2870658186,	84.0+"Earth Years")
  solarSystem.Neptune =
    new Planet("Neptune", 49244,	4498396441,	164.8+"Earth Years")
  solarSystem.Pluto =
    new Planet("Pluto", "not defined officilly correct","not defined officially correct", "not defined officially correct")

  function planetClick(btn)
  {
    document.planetForm.planetData.value =
      solarSystem[btn.value].data()
  }


