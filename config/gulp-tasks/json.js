import { deleteAsync } from "del";

export const json = () => {
	// deleteAsync(`./${app.path.rootFolder}.json`);
	return app.gulp.src(`${app.path.buildFolder}/**/*.*`)
		.pipe(app.plugins.plumber(
			app.plugins.notify.onError({
				title: "JSON",
				message: "Error: <%= error.message %>"
			}))
		)
		.pipe(app.gulp.dest('./'));
}
