SELECT incidents.id, state, injuries.name as injury, affectedareas.name as affectedArea, causes.name as cause FROM incidents
JOIN injuries ON incidents.injuryId = injuries.id
JOIN affectedareas ON injuries.affectedareaid = affectedareas.id
JOIN causes ON incidents.causeid = causes.id