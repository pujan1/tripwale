def get_intersections(self, osm, input_type='file'):


    intersection_coordinates = []
    if input_type == 'file':
        tree = ET.parse(osm)
        root = tree.getroot()
        children = root.getchildren()
    elif input_type == 'str':
        tree = ET.fromstring(osm)
        children = tree.getchildren()

    counter = {}
    for child in children:
        if child.tag == 'way':

            road = False
            road_types = ('primary', 'secondary', 'residential', 'tertiary', 'service') 
            for item in child:
                if item.tag == 'tag' and
                 item.attrib['k'] == 'highway' and 
                 item.attrib['v'] in road_types: 
                    road = True

            if not road:
                continue

            for item in child:
                if item.tag == 'nd':
                    nd_ref = item.attrib['ref']
                    if not nd_ref in counter:
                        counter[nd_ref] = 0
                    counter[nd_ref] += 1

    intersections = filter(lambda x: counter[x] > 1,  counter)

    for child in children:
        if child.tag == 'node' and child.attrib['id'] in intersections:
            coordinate = child.attrib['lat'] + ',' + child.attrib['lon']
            intersection_coordinates.append(coordinate)
    return intersection_coordinates