SELECT incidents.id, state, injuries.name AS injury, affectedareas.name AS affectedArea, causes.name AS cause FROM incidents
JOIN injuries ON incidents.injuryId = injuries.id
JOIN affectedareas ON injuries.affectedareaid = affectedareas.id
JOIN causes ON incidents.causeid = causes.id
WHERE state = $1