// 自动生成的代码。请勿编辑。
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "default":
            case "级别1":return tiles.createTilemap(hex`30000800010101010101010303030101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101020101010102010101010101010101010101010101010103030101010101020101010101020101010101010103010101010101010101010102010101010101010101010101010101010101010101010101010101010101010102010103010101010101010101010101010101010201010101010101010101030301010101010101010101010101010101010101010101010101020101010101010101010101010101010101010101010101010101010101010303010101010101010101010102010101010101010101010101010101010101010101010101010101010201010101010103010101010101010101010101010101010102020101010201010101010101010104040103010101010101010101010101010101020101010101010101010101010101010101010101010101010101010101010303010101`, img`
................................................
................................................
................................................
................................................
................................................
................................................
................................................
................................................
`, [myTiles.transparency16,sprites.castle.tilePath5,sprites.swamp.swampTile1,sprites.castle.tileGrass1,sprites.swamp.swampTile0], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// 自动生成的代码。请勿编辑。