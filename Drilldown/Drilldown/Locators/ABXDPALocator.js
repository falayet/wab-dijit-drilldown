define(["dojo/_base/declare","./_LocatorBase"],function(a,b){return a([b],{locatorType:"ABXDPA",resultsPickList:null,streetGrouping:["DPA_THOROUGHFARE","DPA_DEP_LOCALITY","DPA_POST_TOWN"],premiseGrouping:["PAO_TEXT","PAO_END_SUFFIX","PAO_END_NUMBER","PAO_START_SUFFIX","PAO_START_NUMBER"],streetFields:{STREET_DESCRIPTOR:"DPA_THOROUGHFARE",LOCALITY_NAME:"DPA_DEP_LOCALITY",TOWN_NAME:"DPA_POST_TOWN",ADMINISTRATIVE_AREA:"ADMINISTRATIVE_AREA"},paoFields:{PAO_TEXT:"PAO_TEXT",PAO_START_NUMBER:"PAO_START_NUMBER",PAO_START_SUFFIX:"PAO_START_SUFFIX",PAO_END_NUMBER:"PAO_END_NUMBER",PAO_END_SUFFIX:"PAO_END_SUFFIX"},saoFields:{SAO_TEXT:"SAO_TEXT",SAO_START_NUMBER:"SAO_START_NUMBER",SAO_START_SUFFIX:"SAO_START_SUFFIX",SAO_END_NUMBER:"SAO_END_NUMBER",SAO_END_SUFFIX:"SAO_END_SUFFIX"},constructor:function(){this.inherited(arguments)}})});