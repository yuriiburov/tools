(()=>{"use strict";var t={};(t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})})(t),async function(t){const e=await fetch("https://api.github.com/users/github");if(!e.ok)throw new Error("Failed to grt user data");return await e.json()}().then((e=>(0,t.printProfile)({name:e.name,company:e.location})))})();