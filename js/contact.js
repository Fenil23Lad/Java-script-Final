  var array_of_country = new Array("Canada","India", "USA");

  var array = new Array();
  array[0] = "";
  array[1] = "Alberta|British Columbia|Manitoba|Quebec|Saskatchewan";
  array[2] = "Assam|Bihar|Chandigarh|Chhattisgarh|Delhi|Goa|Gujarat|Haryana|Himachal Pradesh";
  array[3] = "Alabama|Alaska|Arizona|Arkansas|California|Colorado";
  
  function name_of_states(country_id, state_id) {

      var country_index = document.getElementById(country_id).selectedIndex;

      var state_elements = document.getElementById(state_id);

      state_elements.length = 0;
      state_elements.options[0] = new Option('Select State', '');
      state_elements.selectedIndex = 0;

      var array_of_states = array[country_index].split("|");

      for (var i = 0; i < array_of_states.length; i++) {
          state_elements.options[state_elements.length] = new Option(array_of_states[i], array_of_states[i]);
      }
  }


  function name_of_countries(country_id, state_id) {
      // given the id of the <select> tag as function argument, it inserts <option> tags
      var country_elements = document.getElementById(country_id);
      country_elements.length = 0;
      country_elements.options[0] = new Option('Select Country', '-1');
      country_elements.selectedIndex = 0;
      for (var i = 0; i < array_of_country.length; i++) {
          country_elements.options[country_elements.length] = new Option(array_of_country[i], array_of_country[i]);
      }

      if (state_id) {
          country_elements.onchange = function () {
              name_of_states(country_id, state_id);
          };
      }
  }



