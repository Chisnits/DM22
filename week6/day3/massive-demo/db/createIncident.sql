INSERT INTO incidents(state, injuryId, causeId)
VALUES($1, $2, $3)
RETURNING id