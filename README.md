# Introduction
The project features a Digital Alarm Clock that enables the user to set multiple alarms. The initial phase involves a 
digital clock that continuously updates itself at intervals of one second. The next phase enables the user to set alarms, which are subsequently 
appended to a alarm list below. The alarm is designed to trigger the respective alarms at the predetermined time, while providing a delete button for each
newly created alarm. Upon clicking the stop alarm button, the alarm is disabled, and the system promptly removes it from the webpage.

# Approach
The system adds all the set alarms to an array, which is continually monitored every second to verify if it coincides with the current time. Upon
the array containing a matching alarm, the system triggers an alarm sound. Additionally, the system provides a "Stop alarm" feature, which 
enables users to pause the audio. Moreover, users can remove alarms from the array and list by clicking on the "Delete Alarm" button.

# Technology Stack used 
HTML, CSS and JavaScript
