$(document).ready(function(){
  $("#firstForm").submit(function(event) {
    event.preventDefault();
    var healthSymptomsCount = 0;
    $("input:checkbox[name=healthSymptoms]:checked").each(function(){
      healthSymptomsCount++;
    });
    if (healthSymptomsCount > 6) {
      $("#resultHealthSymptoms").text("Go to hospital");
    }
    else if (healthSymptomsCount >= 4){
      $("#resultHealthSymptoms").text("Your body needs more help");
    } else {
      $("#resultHealthSymptoms").text("You are doing GREAT!!!!")
    }
  });
  $("#secondForm").submit(function(event) {
    event.preventDefault();
    var warningSignsCount = 0;
    $("input:checkbox[name=warningSigns]:checked").each(function(){
      warningSignsCount++;
    });
    if (warningSignsCount > 6) {
      $("#resultWarningSigns").text("Go to hospital");
    }
    else if (healthSymptomsCount >= 4){
      $("#resultWarningSigns").text("Your mental health needs more help");
    } else {
      $("#resultWarningSigns").text("You are doing GREAT!!!!")
    }
  });
});
