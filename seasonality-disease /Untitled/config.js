var CONFIG = {
 "data": {
  "_lastModified": 1583851514758,
  "assetsPath": "/Applications/Gapminder Offline.app/Contents/Resources/preview-data/",
  "ddfPath": "./data/ddf--gapminder--systema_globalis",
  "lastModified": 1583851514758,
  "path": "./data/ddf--gapminder--systema_globalis",
  "reader": "ddf"
 },
 "locale": {
  "filePath": "assets/translation/",
  "id": "en"
 },
 "state": {
  "entities": {
   "autoconfig": {
    "excludeIDs": [
     "tag"
    ],
    "type": "entity_domain"
   },
   "dim": "country",
   "filter": {
    "country": {
     "un_state": true
    }
   },
   "show": {},
   "showFallback": {},
   "showItemsMaxCount": null,
   "skipFilter": false
  },
  "entities_colorlegend": {
   "autoconfig": {
    "excludeIDs": [
     "tag"
    ],
    "type": "entity_domain"
   },
   "dim": "world_4region",
   "filter": {},
   "show": {},
   "showFallback": {},
   "showItemsMaxCount": null,
   "skipFilter": false
  },
  "marker": {
   "allowSelectMultiple": true,
   "axis_x": {
    "allow": {
     "scales": [
      "linear",
      "log",
      "genericLog",
      "time",
      "pow"
     ]
    },
    "autoconfig": {
     "index": 0,
     "type": "measure"
    },
    "data": "data",
    "domainMax": 180000,
    "domainMin": 300,
    "fixBaseline": null,
    "scaleType": "log",
    "syncModels": [],
    "use": "indicator",
    "which": "income_per_person_gdppercapita_ppp_inflation_adjusted",
    "zoomedMax": 96000,
    "zoomedMin": 400
   },
   "axis_y": {
    "allow": {
     "scales": [
      "linear",
      "log",
      "genericLog",
      "time",
      "pow"
     ]
    },
    "autoconfig": {
     "index": 1,
     "type": "measure"
    },
    "data": "data",
    "domainMax": 100,
    "domainMin": 0,
    "fixBaseline": null,
    "scaleType": "linear",
    "syncModels": [],
    "use": "indicator",
    "which": "life_expectancy_years",
    "zoomedMax": 86,
    "zoomedMin": 19
   },
   "color": {
    "allow": {
     "scales": [
      "linear",
      "log",
      "genericLog",
      "time",
      "pow",
      "ordinal"
     ]
    },
    "autoconfig": {},
    "data": "data",
    "palette": {
     "_default": [
      "#ffb600",
      "#ffaa14",
      "#ffc500",
      "#fb6d19",
      "#ffb600",
      "#9b4838"
     ],
     "africa": [
      "#00d5e9",
      "#00c8ec",
      "#00e1ec",
      "#0098df",
      "#77dff7",
      "#0586c6"
     ],
     "americas": [
      "#7feb00",
      "#5de200",
      "#81f201",
      "#00b900",
      "#b5ea32",
      "#008d36"
     ],
     "asia": [
      "#ff5872",
      "#ff5178",
      "#ff658a",
      "#da0025",
      "#fa4e73",
      "#b2043a"
     ],
     "europe": [
      "#ffe700",
      "#fbdd00",
      "#fff400",
      "#fbaf09",
      "#ffe700",
      "#b17f4a"
     ]
    },
    "paletteHiddenKeys": [],
    "paletteLabels": null,
    "scaleType": "ordinal",
    "syncModels": [
     "marker_colorlegend"
    ],
    "use": "property",
    "which": "world_4region"
   },
   "highlight": [],
   "label": {
    "autoconfig": {
     "includeOnlyIDs": [
      "name"
     ],
     "type": "string"
    },
    "data": "data",
    "scaleType": "ordinal",
    "syncModels": [],
    "use": "property",
    "which": "name"
   },
   "limit": 5000,
   "opacityHighlightDim": 0.1,
   "opacityRegular": 1,
   "opacitySelectDim": 0.3,
   "select": [],
   "size": {
    "allow": {
     "scales": [
      "linear"
     ]
    },
    "autoconfig": {
     "index": 2,
     "type": "measure"
    },
    "data": "data",
    "domainMax": null,
    "domainMin": null,
    "extent": [
     0,
     0.85
    ],
    "fixBaseline": 0,
    "scaleType": "linear",
    "spaceRef": null,
    "syncModels": [],
    "use": "indicator",
    "which": "yearly_co2_emissions_1000_tonnes",
    "zoomedMax": null,
    "zoomedMin": null
   },
   "size_label": {
    "_important": false,
    "allow": {
     "names": [
      "_default"
     ],
     "scales": [
      "ordinal",
      "linear",
      "log",
      "genericLog",
      "pow"
     ]
    },
    "data": "data",
    "domainMax": null,
    "domainMin": null,
    "extent": [
     0,
     0.33
    ],
    "fixBaseline": 0,
    "scaleType": "ordinal",
    "syncModels": [],
    "use": "constant",
    "which": "_default",
    "zoomedMax": null,
    "zoomedMin": null
   },
   "space": [
    "entities",
    "time"
   ],
   "superHighlight": []
  },
  "marker_colorlegend": {
   "allowSelectMultiple": true,
   "highlight": [],
   "hook_geoshape": {
    "data": "data",
    "scaleType": "ordinal",
    "syncModels": [],
    "use": "property",
    "which": "shape_lores_svg"
   },
   "hook_rank": {
    "data": "data",
    "scaleType": "linear",
    "syncModels": [],
    "use": "property",
    "which": "rank"
   },
   "label": {
    "data": "data",
    "scaleType": "ordinal",
    "syncModels": [],
    "use": "property",
    "which": "name"
   },
   "limit": 1000,
   "opacityHighlightDim": 0.3,
   "opacityRegular": 0.8,
   "opacitySelectDim": 0.3,
   "select": [],
   "space": [
    "entities_colorlegend"
   ],
   "superHighlight": []
  },
  "time": {
   "autoconfig": {
    "type": "time"
   },
   "delay": 150,
   "delayThresholdX2": 90,
   "delayThresholdX4": 45,
   "dim": "time",
   "end": "2014",
   "endBeforeForecast": "2019",
   "endOrigin": null,
   "endSelected": "2014",
   "format": {
    "data": null,
    "ui": null
   },
   "immediatePlay": true,
   "loop": false,
   "offset": 0,
   "pauseBeforeForecast": true,
   "playable": true,
   "playing": false,
   "record": false,
   "round": "round",
   "showForecast": false,
   "start": "1800",
   "startOrigin": null,
   "startSelected": "1800",
   "step": 1,
   "unit": "year",
   "value": "2014"
  }
 },
 "ui": {
  "adaptMinMaxZoom": false,
  "buttons": [
   "colors",
   "find",
   "zoom",
   "trails",
   "lock",
   "moreoptions",
   "presentation",
   "sidebarcollapse",
   "fullscreen"
  ],
  "chart": {
   "decorations": {
    "enabled": true,
    "xAxisGroups": {
     "income_per_person_gdppercapita_ppp_inflation_adjusted": [
      {
       "label": "incomegroups/level1",
       "label_short": "incomegroups/level1short",
       "max": 2650,
       "min": null
      },
      {
       "label": "incomegroups/level2",
       "label_short": "incomegroups/level2short",
       "max": 8000,
       "min": 2650
      },
      {
       "label": "incomegroups/level3",
       "label_short": "incomegroups/level3short",
       "max": 24200,
       "min": 8000
      },
      {
       "label": "incomegroups/level4",
       "label_short": "incomegroups/level4short",
       "max": null,
       "min": 24200
      }
     ]
    }
   },
   "labels": {
    "dragging": true,
    "removeLabelBox": false
   },
   "lockNonSelected": 0,
   "margin": {
    "left": 80.37,
    "top": 0
   },
   "showForecastOverlay": true,
   "superhighlightOnMinimapHover": true,
   "trails": true,
   "whenHovering": {
    "higlightValueX": true,
    "higlightValueY": true,
    "showProjectionLineX": true,
    "showProjectionLineY": true
   }
  },
  "cursorMode": "arrow",
  "datawarning": {
   "doubtDomain": [
    1800,
    1950,
    2015
   ],
   "doubtRange": [
    1,
    0.3,
    0.2
   ]
  },
  "dialogs": {
   "dialog": {
    "find": {
     "enableSelectShowSwitch": false
    }
   },
   "moreoptions": [
    "opacity",
    "speed",
    "axes",
    "size",
    "colors",
    "label",
    "zoom",
    "presentation",
    "technical",
    "about"
   ],
   "popup": [
    "colors",
    "find",
    "size",
    "zoom",
    "moreoptions"
   ],
   "sidebar": [
    "colors",
    "find",
    "size",
    "zoom"
   ]
  },
  "panWithArrow": false,
  "presentation": false,
  "show_ticks": true,
  "sidebarCollapse": false,
  "splash": false,
  "treemenu": {
   "folderStrategyByDataset": {
    "data": "spread",
    "data_fasttrack": "spread",
    "data_wdi": "folder:other_datasets"
   }
  },
  "zoomOnScrolling": false
 },
 "chartType": "BubbleChart"
};