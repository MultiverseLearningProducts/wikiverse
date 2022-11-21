const { db, Page } = require('../server/models/index.js');
const { pages } = require('../server/seedData.js');

describe('------ Page model tests ------', () => {
    beforeAll(async () => {
        await db.sync({force: true});
    });

    it('can create a Page', async () => {
        const newPage = await Page.create(pages[0]);
        expect(newPage.title).toBe('First Page');
        expect(newPage.content).toBe('This is my first page. I hope I love writing articles as much as I love reading them.');
        expect(newPage.status).toBe('closed');
        expect(newPage.authorId).toBe(2);
    });

    it('can delete a Page', async () => {
        await Page.destroy({
            where: {
                id: 1
            }
        });

        const notFound = await Page.findAll({
            where: { id: 1 }
        });

        expect(notFound).toEqual([]);
    });
});