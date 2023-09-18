function skillsMember () {
  return {
	restrict: 'E',
	templateUrl: 'views/skills-member.html',
	scope: {
	  member: '='
	}
  };
}