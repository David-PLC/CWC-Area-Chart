# CWC-Area-Chart

<img src="https://apexcharts.com/wp-content/themes/apexcharts/img/apexcharts-logo-white-trimmed.svg" alt="Apex Chart"/>

Custom Web Control made for WinCC Unified

### 1. CONTENT

HTML area chart element done with ApexChart

### 2. INTERFACE

  - **X_axis** : Array of element to draw the X axis of the chart (i.e. ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"])

  - **Y_axis** : String in array format of numbers to draw the seires of the chart (i.e. "[[18, 21, 22, 16, 19, 21, 21, 21],[7, 9, 11, 11, 9, 12, 11, 11]]")
  
  - **DataName** : Array of strings with the name for each series (i.e. ["Maximum (°C)","Minimum (°C)"])
    
  - **X_axisname** : Name of the X axis (i.e. "Days")
  
  - **Y_axisname** : Name of the Y axis (i.e. "Temperatures")

  - **SeriesColor** : Array of string with the color in Hex format for each series (i.e. ["#ee730d","#1183e8"])
  
  - **SeriesLabels** : Flag to hide or show (False / True) the labels on the series (i.e. "True")
  
  - **LineType** : Draw smooth lines or straight lines (i.e. "Smooth")
### 3. EVENTS

  - **NONE**