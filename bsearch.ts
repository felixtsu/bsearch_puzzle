namespace SpriteKind {
    export const Student = SpriteKind.create();
}

namespace bsearch {


    let weights: number[] = [];
    let length:number;
    let targetIndex: number;
    let target:number;
    let solver: (weights: number[], target: number) => void = null;
    let headSprite:Sprite;
    let teacherSprite: Sprite;
    let count = 0;


    //%block
    //%blockid=bsearch_size block="一共多少人"
    export function size() {
        return length;
    }

    //%block
    //%blockid=bsearch_startgame block="开始挑战"
    export function startGame() {

        scene.setTileMapLevel(assets.tilemap`default`)

        length = randint(900, 1000);

        let next = randint(1, 5);
        for (let i = 0; i < length; i++) {
            weights[i] = next;
            next += randint(1, 5);
        }
        targetIndex = randint(0, length);
        target = weights[targetIndex];

        puzzleStart();

        



    }

    function puzzleStart(): void {


        story.startCutscene(() => {


            for (let i = 0; i < 20; i++) {
                let studentSprite = sprites.create(img`
                . . . . f f f f . . . . .
                . . f f f f f f f f . . .
                . f f f f f f c f f f . .
                f f f f f f c c f f f c .
                f f f c f f f f f f f c .
                c c c f f f e e f f c c .
                f f f f f e e f f c c f .
                f f f b f e e f b f f f .
                . f 4 1 f 4 4 f 1 4 f . .
                . f e 4 4 4 4 4 4 e f . .
                . f f f e e e e f f f . .
                f e f b 7 7 7 7 b f e f .
                e 4 f 7 7 7 7 7 7 f 4 e .
                e e f 6 6 6 6 6 6 f e e .
                . . . f f f f f f . . . .
                . . . f f . . f f . . . .
            `, SpriteKind.Student)
                studentSprite.setFlag(SpriteFlag.BounceOnWall, true);
                studentSprite.x = randint(8, 152);
                studentSprite.y = randint(8, 132);

                let angle = Math.randomRange(-Math.PI, Math.PI)
                studentSprite.vx = 30 * Math.sin(angle);
                studentSprite.vy = 30 * Math.cos(angle);
            }
            pause(1000)
            teacherSprite = sprites.create(img`
            . . . . f f f f . . . .
            . . f f e e e e f f . .
            . f f e e e e e e f f .
            f f f f 4 e e e f f f f
            f f f 4 4 4 e e f f f f
            f f f 4 4 4 4 e e f f f
            f 4 e 4 4 4 4 4 4 e 4 f
            f 4 4 f f 4 4 f f 4 4 f
            f e 4 d d d d d d 4 e f
            . f e d d b b d d e f .
            . f f e 4 4 4 4 e f f .
            e 4 f b 1 1 1 1 b f 4 e
            4 d f 1 1 1 1 1 1 f d 4
            4 4 f 6 6 6 6 6 6 f 4 4
            . . . f f f f f f . . .
            . . . f f . . f f . . .
        `);
            teacherSprite.y += 48
            story.spriteSayText(teacherSprite, "咳咳咳")

            for (let studentSprite of sprites.allOfKind(SpriteKind.Student)) {
                studentSprite.sayText("!", 1000)
                studentSprite.vx = 0;
                studentSprite.vy = 0;
            }

            story.spriteSayText(teacherSprite, "集合")  

            story.spriteSayText(teacherSprite, "按编号从小到大排好！")

            let index = 0;

            let cameraMan = sprites.create(img`.`);
            scene.cameraFollowSprite(cameraMan)

            for (let studentSprite of sprites.allOfKind(SpriteKind.Student)) {
                studentSprite.setFlag(SpriteFlag.BounceOnWall, false);
                story.spriteMoveToLocation(studentSprite, 8 + 16 * index++, 60, 2000);
            }

            story.spriteSayText(teacherSprite, "报号!")

            index = 0;
            cameraMan.x = 60;
            cameraMan.vx = 100;
            for (let studentSprite of sprites.allOfKind(SpriteKind.Student)) {
                studentSprite.sayText(weights[index++], 5000);
            }

            let dummySprite = sprites.create(img`
                ....ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff....
                ..ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff..
                .ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfff.
                ffffffffffffffffffffffffffffffffffffffffffffccccccccccccccccccccccccccccccccccccccccfffc
                fffcfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc
                cccfffffffffffffffffffffffffffffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffcc
                ffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffccf
                fffbeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefbfff
                .f414444444444444444444444444444444444444444444444444444444444444444444444444444444f14f.
                .fe4444444444444444444444444444444444444444444444444444444444444444444444444444444444ef.
                .fffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefff.
                fefb77777777777777777777777777777777777777777777777777777777777777777777777777777777bfef
                e4f7777777777777777777777777777777777777777777777777777777777777777777777777777777777f4e
                eef6666666666666666666666666666666666666666666666666666666666666666666666666666666666fee
                ...ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff...
                ...ff..............................................................................ff...
            `) 
            dummySprite.x = 364



            for (let i = 0; i < 10; i++) {
                let studentSprite = sprites.create(img`
                . . . . f f f f . . . . .
                . . f f f f f f f f . . .
                . f f f f f f c f f f . .
                f f f f f f c c f f f c .
                f f f c f f f f f f f c .
                c c c f f f e e f f c c .
                f f f f f e e f f c c f .
                f f f b f e e f b f f f .
                . f 4 1 f 4 4 f 1 4 f . .
                . f e 4 4 4 4 4 4 e f . .
                . f f f e e e e f f f . .
                f e f b 7 7 7 7 b f e f .
                e 4 f 7 7 7 7 7 7 f 4 e .
                e e f 6 6 6 6 6 6 f e e .
                . . . f f f f f f . . . .
                . . . f f . . f f . . . .
            `, SpriteKind.Student)
                studentSprite.x = 408 + i*16;
                studentSprite.y = 60;
                studentSprite.say(weights[weights.length - 10 + i], 7000 + i * 200);
            }

            story.spriteMoveToLocation(cameraMan, 480, 60, 100);
            pause(2000)
            cameraMan.x = 80;
            story.spriteSayText(teacherSprite, "班长")

            headSprite = sprites.create(img`
                . . . . . . f f f f . . . . . .
                . . . . f f f 2 2 f f f . . . .
                . . . f f f 2 2 2 2 f f f . . .
                . . f f f e e e e e e f f f . .
                . . f f e 2 2 2 2 2 2 e e f . .
                . . f e 2 f f f f f f 2 e f . .
                . . f f f f e e e e f f f f . .
                . f f e f b f 4 4 f b f e f f .
                . f e e 4 1 f d d f 1 4 e e f .
                . . f e e d d d d d d e e f . .
                . . . f e e 4 4 4 4 e e f . . .
                . . e 4 f 2 2 2 2 2 2 f 4 e . .
                . . 4 d f 2 2 2 2 2 2 f d 4 . .
                . . 4 4 f 4 4 5 5 4 4 f 4 4 . .
                . . . . . f f f f f f . . . . .
                . . . . . f f . . f f . . . . .
            `);
            headSprite.y += 32;
            headSprite.x += 32;

            story.spriteSayText(headSprite, "在!")

            story.spriteSayText(teacherSprite, "编号")
            story.spriteSayText(teacherSprite, "" + targetIndex)
            story.spriteSayText(teacherSprite, "的同学在第几位?")

            if (solver) {
                solver(weights, target);
            }

        })

    }


    //%block
    //%blockid=bsearch_solvepuzzle block="在队伍 $weights 里找到编号 $target 的学生 "
    //% draggableParameters
    export function solvePuzzle(cb: (weights: number[], target: number) => void) {
        solver = cb;
    }


    //%block
    //%blockid=bsearch_sumbitanswer block="第 %answer 位就是要找的人"
    export function submitAnswer(answer: number) {
        // story.startCutscene( () => {
            story.spriteSayText(headSprite, "报告老师");
            story.spriteSayText(headSprite, "第" + answer + "就是你要找的人");

            if(answer == targetIndex) {
                game.splash("共用了" + count + "次就找到了")
                game.over(true)
            } else {
                game.over(false)
            }
        // })

        
    }

    //%block
    //%blockid=bsearch_at block="第%index 位的编号"
    export function at(index: number): number {
        count += 1;
        let finished =false;
        // story.startCutscene(()=>{

            if (index < 0 || index >= weights.length || index.toString().indexOf(".") != -1) {
                game.splash("根本找不到这个人", index)
            }

            story.spriteSayText(headSprite, "第" + index + "位同学") 
            story.spriteSayText(headSprite, "你编号多少?")

            

            finished = true;
        // })
        // while(!finished) {
        //     pause(10)

        // }
        return weights[index];
    }

}